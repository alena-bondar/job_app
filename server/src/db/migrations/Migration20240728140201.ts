import { Migration } from '@mikro-orm/migrations';

export class Migration20240728140201 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "job" alter column "job_description" type varchar(255) using ("job_description"::varchar(255));',
    );

    this.addSql('alter table "appliances" alter column "id" drop default;');
    this.addSql(
      'alter table "appliances" alter column "id" type uuid using ("id"::text::uuid);',
    );
    this.addSql('alter table "appliances" alter column "id" drop default;');
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "appliances" alter column "id" type text using ("id"::text);',
    );

    this.addSql(
      'alter table "job" alter column "job_description" type text using ("job_description"::text);',
    );

    this.addSql(
      'alter table "appliances" alter column "id" type int using ("id"::int);',
    );
    this.addSql('create sequence if not exists "appliances_id_seq";');
    this.addSql(
      'select setval(\'appliances_id_seq\', (select max("id") from "appliances"));',
    );
    this.addSql(
      'alter table "appliances" alter column "id" set default nextval(\'appliances_id_seq\');',
    );
  }
}
