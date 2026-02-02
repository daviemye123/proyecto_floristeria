from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


def master_view(request):
    """Renderiza directamente la plantilla `master.html` como página independiente (preview).
    Esto permite enlazar `index` a la plantilla `master` sin crear archivos adicionales.
    """
    return render(request, 'master.html')


def all_categorias(request):
    """Vista sencilla para listar categorías. Por ahora devuelve una lista vacía
    si aún no existe modelo `Categoria`. Reemplaza con `Categoria.objects.all()`
    cuando tengas el modelo listo.
    """
    categorias = []  # TODO: sustituir por Categoria.objects.all() cuando exista
    return render(request, 'all_categoria.html', {'categorias': categorias})

# Create your views here.
