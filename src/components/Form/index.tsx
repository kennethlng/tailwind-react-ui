import FormControl from './FormControl';
import FormDescription from './FormDescription';
import FormLabel from './FormLabel';
import FormHelperText from './HelperText';

const FormBase = () => {};

const Form = Object.assign(FormBase, {
  Control: FormControl,
  Label: FormLabel,
  Description: FormDescription,
  HelperText: FormHelperText,
});

export default Form;
