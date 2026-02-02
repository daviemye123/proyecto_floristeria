from django.shortcuts import render


def categorias_list(request):
    """Lista de categorías (temporal, lista vacía hasta que exista el modelo Categoria)."""
    categorias = []  # TODO: sustituir por Categoria.objects.all() cuando exista el modelo
    return render(request, 'all_categoria.html', {'categorias': categorias})

# Create your views here.
