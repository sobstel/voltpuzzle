import yaml from 'js-yaml';
import $ from 'react-native-hydro-kit/lib/config';
import scriptYml from '@volt/script.yml';

$.script = yaml.safeLoad(scriptYml);
