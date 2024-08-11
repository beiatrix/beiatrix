// ionic
import {
  image,
  logoGithub,
  logoInstagram,
  logoLinkedin,
  logoYoutube,
  mail
} from 'ionicons/icons'

// types
import { Item } from '@/types'

export const appBarItems: Item[] = [
  {
    icon: image,
    text: 'Art',
    url: 'https://instagram.com/beiatrix.art'
  },
  {
    icon: logoInstagram,
    text: 'Instagram',
    url: 'https://instagram.com/beiatrix'
  },
  {
    icon: logoYoutube,
    text: 'YouTube',
    url: 'https://www.youtube.com/beiatrix'
  },
  {
    icon: logoGithub,
    text: 'GitHub',
    url: 'https://github.com/beiatrix'
  },
  {
    icon: logoLinkedin,
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/beiatrix/'
  },
  {
    icon: mail,
    text: 'Mail',
    url: 'mailto:beiatrixmgmt@gmail.com'
  }
]
