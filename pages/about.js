import Image from 'next/image'

import styles from '../styles/About.module.css'


export default function About() {

    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec eleifend odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada, orci dictum lobortis pellentesque, mauris eros elementum augue, sed iaculis magna mi ac felis. Sed efficitur nisl ultrices ipsum molestie pulvinar. Phasellus fringilla, erat at porta ultricies, purus eros consequat est, sit amet fringilla augue metus eu lectus. Cras in venenatis mauris, in hendrerit lacus. Nunc neque enim, euismod sed venenatis sit amet, bibendum non purus. Donec pharetra luctus tortor at auctor.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )

}