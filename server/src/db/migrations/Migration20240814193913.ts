import { Migration } from '@mikro-orm/migrations';

export class Migration20240814193913 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "company" alter column "deleted" type boolean using ("deleted"::boolean);',
    );
    this.addSql(
      'alter table "company" alter column "deleted" set default false;',
    );

    this.addSql(
      'alter table "job" alter column "deleted" type boolean using ("deleted"::boolean);',
    );
    this.addSql('alter table "job" alter column "deleted" set default false;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "company" alter column "deleted" drop default;');
    this.addSql(
      'alter table "company" alter column "deleted" type boolean using ("deleted"::boolean);',
    );

    this.addSql('alter table "job" alter column "deleted" drop default;');
    this.addSql(
      'alter table "job" alter column "deleted" type boolean using ("deleted"::boolean);',
    );
  }
}
