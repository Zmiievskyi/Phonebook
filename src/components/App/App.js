import { GlobalStyle, Section } from 'components/Common';
import Phonebook from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';

export default function App() {

  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Contacts/>
      </Section>
      <GlobalStyle />
    </>
  );
}
