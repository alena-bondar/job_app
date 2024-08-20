import { Migration } from '@mikro-orm/migrations';

export class Migration20240820162955 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "appliances" alter column "company_id" type text using ("company_id"::text);');

    this.addSql('alter table "appliances" alter column "company_id" type varchar(255) using ("company_id"::varchar(255));');
    this.addSql('alter table "appliances" alter column "company_id" set not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "appliances" alter column "company_id" drop default;');
    this.addSql('alter table "appliances" alter column "company_id" type uuid using ("company_id"::text::uuid);');
    this.addSql('alter table "appliances" alter column "company_id" drop not null;');
  }

}
