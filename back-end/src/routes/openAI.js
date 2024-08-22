import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../data/constants';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true
});

export default openai;