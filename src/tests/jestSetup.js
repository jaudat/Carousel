import { configure } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new Adaptor() });