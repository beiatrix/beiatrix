export interface Item {
  emoji?: string
  icon: string
  iconClass?: string
  name: string
}

export type ItemType = 'interest' | 'skill'

export interface AppBarItem extends Item {
  url: string
}
