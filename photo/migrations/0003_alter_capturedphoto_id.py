# Generated by Django 4.2.4 on 2024-02-05 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photo', '0002_alter_capturedphoto_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='capturedphoto',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
