import useRecursos from '../hooks/useRecursos';
import Table from '../components/Shared/Table';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const RecursoPage = () => {
  const { recursos, loading } = useRecursos();

  if (loading) return <LoadingSpinner />;

  const columns = ['id_recurso', 'tipo_recurso', 'id_categoria', 'titulo', 'descripcion', 'activo'];
  return (
    <div>
      <h1>Resources</h1>
      <Table data={recursos} columns={columns} />
    </div>
  );
};

export default RecursoPage;
