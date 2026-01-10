from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


def master_view(request):
    """Renderiza directamente la plantilla `master.html` como página independiente (preview).
    Esto permite enlazar `index` a la plantilla `master` sin crear archivos adicionales.
    """
    return render(request, 'master.html')

# Create your views here.
