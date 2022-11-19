import React from 'react'

export const MoreDetails = () => <>
    More details and the source can be found on < a href="https://github.com/JFL110/jamesleach.dev-backend-monorepo/tree/main/neural" >Github</a >.
</ >;

export const Blurb = ({ mobile }) => <>
    Digit recognition using
    the <a href="https://en.wikipedia.org/wiki/MNIST_database">MNIST dataset</a> is the &apos;hello world&apos; of
    machine learning. This interface communicates with
    a  neural network trained on the dataset implemented using Java with <a href="https://deeplearning4j.org/">Deeplearning4j</a>.
    {!mobile &&
        <>
            Try drawing a digit <b>slowly</b> on the canvas.
        </>}
</>;

export const MobileTopSummary = () => <>
    Try drawing on the canvas below. Full details and source on <a href="https://github.com/JFL110/jamesleach.dev-backend-monorepo/tree/main/neural">Github</a>.
</>