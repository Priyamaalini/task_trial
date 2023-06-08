# Generated by Django 4.2.1 on 2023-06-08 10:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trial_app', '0002_remove_userprofile_user_userprofile_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SurveyCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_count', models.IntegerField(default=0)),
                ('survey', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='trial_app.survey')),
            ],
        ),
        migrations.CreateModel(
            name='SurveyMark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marks', models.IntegerField()),
                ('survey', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trial_app.survey')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trial_app.userprofile')),
            ],
        ),
        migrations.DeleteModel(
            name='Count',
        ),
    ]