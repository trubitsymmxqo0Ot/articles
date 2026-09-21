import { createFileRoute } from '@tanstack/react-router'
import { Root } from 'pages/root'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Root/>
}
