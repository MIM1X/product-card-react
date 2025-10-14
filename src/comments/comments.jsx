import React from 'react';
import { Ul } from '../elements';
import { CoomentsLi, CoomentsButton, Name, Text } from './styled';

function Comments({ comments }) {
  return (
    <div>
      <Ul>
        {comments.map((comment) => {
          return (
            <CoomentsLi key={comment.id}>
              <Name>{comment.author}</Name>
              <Text>{comment.text}</Text>
            </CoomentsLi>
          );
        })}
      </Ul>
      <CoomentsButton>Показать ещё</CoomentsButton>
    </div>
  );
}

export default Comments;
