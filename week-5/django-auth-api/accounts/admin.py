from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
# Register your models here.

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
  model = CustomUser
  list_display = ('email', 'is_staff', 'is_active')
  list_filter = ('is_staff', 'is_active')
  fieldsets = (
    (None, {"fields":('email', 'password')}),
    ("Permissions", {"fields":("is_staff", "is_active", "is_superuser", "groups", "user_permissions")}),
    ("Important dates" , {"fields":("last_login", "date_joined")}),
  )

  add_fieldsets = (
    (None, {"classes":("wide",),
            "fields": ("email", "password", "password2", "is_staff", "is_active"),
            }),
  )
  search_fields = ("email",)
  ordering = ("email",)
