import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    date="Today at 3:00PM" 
                    content="You're my hero!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    date="Yesterday at 9:00AM" 
                    content="Nice blog post" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jessie" 
                    date="Tuesday at 8:00PM" 
                    content="Howdy!" 
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
