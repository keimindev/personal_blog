import { Fit, Layout, useRive } from '@rive-app/react-canvas'

const MainCharacter = () => {
  const { rive, RiveComponent } = useRive({
    // src: '/jains_avatar.riv',
    src: '/min.riv',
    animations: 'EyeBlink',
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Cover,
      // alignment: Alignment.Center,
    }),
  })

  return <RiveComponent onMouseEnter={() => rive && rive.play()} />
}

export default MainCharacter
