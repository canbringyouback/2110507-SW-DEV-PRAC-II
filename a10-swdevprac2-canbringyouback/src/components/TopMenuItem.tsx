import styles from './topmenu.module.css'
import Link from 'next/link'

export default function TopmenuItem({title,pageRef}:{title:string,pageRef:string}){

    return (
        <Link className="text-base w-[120px]  text-center my-auto text-gray-800 content-end" href={pageRef}>
        {title}
        </Link>
    )
    ;
}