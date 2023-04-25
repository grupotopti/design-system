import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  borderImage: 'default' | 'px' | 'xs' | 'sm' | 'md' | 'lg'
}

export function Avatar({ borderImage = 'default', ...props }: AvatarProps) {
  return (
    <AvatarContainer borderImage={borderImage}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
