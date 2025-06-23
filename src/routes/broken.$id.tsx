import { createFileRoute } from '@tanstack/react-router';
import { useResourceId } from '@/useResourceId.ts';
import type { ResourceId } from '@/ResourceId.ts';

export const Route = createFileRoute('/broken/$id')({
  loader: async (_) => {
  },

  component: RouteComponent,

  params: {
    parse: (p) => ({
      id: p.id as ResourceId,
    }),
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  useResourceId(id);

  return <div>Hello "/with-loader/$id"!</div>;
}
