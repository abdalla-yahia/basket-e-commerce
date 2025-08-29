import * as icons from '@/Utils/Icons/Icons';

export default function Dashboard_Icon({icon}:{icon: keyof typeof icons}) {
    const ICON = icons[icon]
  return (
    <div>
        <ICON />
    </div>
  )
}
