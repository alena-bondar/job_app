import { Migration } from '@mikro-orm/migrations';

export class Migration20240728062618 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "appliances" drop constraint "appliances_jobId_foreign";',
    );

    this.addSql(
      'alter table "appliances" drop constraint "appliances_jobId_unique";',
    );

    this.addSql('alter table "appliances" rename column "jobId" to "job_id";');
    this.addSql(
      'alter table "appliances" add constraint "appliances_job_id_foreign" foreign key ("job_id") references "job" ("job_id") on update cascade;',
    );
    this.addSql(
      'alter table "appliances" add constraint "appliances_job_id_unique" unique ("job_id");',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "appliances" drop constraint "appliances_job_id_foreign";',
    );

    this.addSql(
      'alter table "appliances" drop constraint "appliances_job_id_unique";',
    );

    this.addSql('alter table "appliances" rename column "job_id" to "jobId";');
    this.addSql(
      'alter table "appliances" add constraint "appliances_jobId_foreign" foreign key ("jobId") references "job" ("job_id") on update cascade on delete no action;',
    );
    this.addSql(
      'CREATE UNIQUE INDEX "appliances_jobId_unique" ON public.appliances USING btree ("jobId");',
    );
  }
}
