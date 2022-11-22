import purga from './PURGARESIZE.png'
import martello from './MARTELLOPRODRESIZE.png'
import { waitForElementToBeRemoved } from '@testing-library/dom'

export default function Footer() {
return(<footer>
    <img src={purga} alt="purgatorio" />
    <img src={martello} alt="martello" />
</footer>)
}
