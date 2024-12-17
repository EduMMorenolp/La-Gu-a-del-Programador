import useCategorias from '../hooks/useCategorias';
import Table from '../components/Shared/Table';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const CategoriaPage = () => {
  const { categorias, loading } = useCategorias();

  if (loading) return <LoadingSpinner />;

  const columns = ['id_categoria', 'nombre', 'descripcion'];
  return (
    <div>
      <h1>Categories</h1>
      <Table data={categorias} columns={columns} />
    </div>
  );
};

export default CategoriaPage;
