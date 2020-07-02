import React from 'react';

import './About.css'

import world from '../../../../assets/better-world.svg'
const About = () => {
    return (
        <section className="About">
            <h3>Sobre</h3>
            <div className="texto">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at turpis vulputate, eleifend tellus sit amet, ornare justo. Duis in nulla ligula. Curabitur at augue magna. Curabitur imperdiet ante vel nisi bibendum vestibulum. Pellentesque nec ligula sagittis, egestas orci laoreet, ullamcorper velit. Nunc urna magna, hendrerit ac ante nec, commodo finibus metus. Donec luctus, mi sit amet semper gravida, felis ex lobortis lorem, ac egestas augue sem ut ligula. Sed tristique pretium sem, id mollis sem porta at. Praesent blandit accumsan tortor eget convallis.
                </p>

                <p>
                <img src={world} alt="world"/>
                Maecenas dolor purus, faucibus eget consequat nec, feugiat ut justo. Nulla vestibulum aliquet bibendum. Integer pulvinar gravida magna, non porta augue sodales eget. Sed augue ex, tincidunt quis euismod vel, tincidunt vitae purus.br Donec at quam elementum massa mattis finibus nec nec nisi. Suspendisse posuere faucibus nunc, mollis varius turpis pulvinar in. Aenean facilisis libero sit amet semper tempor. Cras ac ultrices metus. Donec sed ex at justo malesuada sagittis quis pulvinar felis. Proin dolor justo, luctus et nisi id, euismod dignissim lorem. Curabitur cursus convallis lacus non pretium. Etiam vulputate euismod quam ac varius. Praesent pulvinar egestas aliquam. Vestibulum et porttitor turpis, nec auctor velit. Mauris pulvinar ultrices nibh vel malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at turpis vulputate, eleifend tellus sit amet, ornare justo. Duis in nulla ligula. Curabitur at augue magna. Curabitur imperdiet ante vel nisi bibendum vestibulum. Pellentesque nec ligula sagittis, egestas orci laoreet, ullamcorper velit. Nunc urna magna, hendrerit ac ante nec, commodo finibus metus. Donec luctus, mi sit amet semper gravida, felis ex lobortis lorem, ac egestas augue sem ut ligula. Sed tristique pretium sem, id mollis sem porta at. Praesent blandit accumsan tortor eget convallis.
                </p>
            </div>
    </section>
    )
}

export default About;