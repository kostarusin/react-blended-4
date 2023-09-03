import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList/TodoList';
import { useSelector } from 'react-redux';

export const App = () => {
  const todos = useSelector(state => state.items);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
