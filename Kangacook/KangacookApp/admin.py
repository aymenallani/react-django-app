from django.contrib import admin
from .models import Recipe
# Register your models here.
class RecipeAdmin(admin.ModelAdmin):
    list_display = ["title", "category","created"]

admin.site.register(Recipe,RecipeAdmin)