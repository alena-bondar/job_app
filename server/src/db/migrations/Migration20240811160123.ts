import { Migration } from '@mikro-orm/migrations';

export class Migration20240811160123 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "company" drop constraint "company_company_name_unique";',
    );

    this.addSql(
      'alter table "company" alter column "company_name" type varchar(255) using ("company_name"::varchar(255));',
    );
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "company" alter column "company_name" type text using ("company_name"::text);',
    );
    this.addSql(
      'alter table "company" add constraint "company_company_name_unique" unique ("company_name");',
    );
  }
}
