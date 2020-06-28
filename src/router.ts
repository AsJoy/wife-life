import {Component} from 'react'
import {DefaultComponent} from '@loadable/component'

export interface RouterParam {
  path: string
  component?: () => Promise<DefaultComponent<unknown>>
  children?: RouterParam[]
}

const routers: RouterParam[] = [{
  path: '/tool',
  component: () => (import('./components/excel-open-urls/index') as any)
}]

export default routers
