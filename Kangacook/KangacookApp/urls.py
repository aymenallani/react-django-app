from django.urls import path
from .import views

urlpatterns = [
    path("recipes/", views.recipes, name="recipes"),
    path("recipes/<slug:slug>", views.recipe_detail, name="recipe-detail"),
    path("recipes-search/", views.search_recipes, name="recipes-search")

]