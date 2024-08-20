import { Migration } from '@mikro-orm/migrations';

export class Migration20240814193425 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "company" add column "deleted" boolean not null;');

    this.addSql('alter table "job" add column "deleted" boolean not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "company" drop column "deleted";');

    this.addSql('alter table "job" drop column "deleted";');
  }
}
