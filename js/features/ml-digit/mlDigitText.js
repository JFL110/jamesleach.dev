import React from 'react'

export const MoreDetails = () => <React.Fragment>
    More details and the source can be found on < a href="https://github.com/JFL110/deployed-ml" >Github</a >.
</React.Fragment >;

export const Blurb = ({ mobile }) => <React.Fragment>
    Digit recognition using
    the <a href="https://en.wikipedia.org/wiki/MNIST_database">MNIST dataset</a> is the &apos;hello world&apos; of
    machine learning. This interface communicates with
    a  neural network trained on the dataset implemented using Java with <a href="https://deeplearning4j.org/">Deeplearning4j</a>.
     {!mobile &&
        <React.Fragment>
            Try drawing a digit <b>slowly</b> on the canvas.
        </React.Fragment>}
</React.Fragment>;

export const MobileTopSummary = () => <React.Fragment>
    Try drawing on the canvas below. Full details and source on <a href="https://github.com/JFL110/deployed-ml">Github</a>.
</React.Fragment>