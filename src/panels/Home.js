import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, CardGrid,ContentCard, FixedLayout, Separator,WriteBar, WriteBarIcon } from '@vkontakte/vkui';




const Home = ({ id, go, fetchedUser }) => {
	const [text, setText] = useState(""); 

	return (
	<Panel id={id}>


		<PanelHeader>Чатик</PanelHeader>
		
		 {/*fetchedUser &&
		<Group header={<Header mode="secondary">Добро пожаловать!</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group> 
*/} 

		<Group>
		<CardGrid size="l">
		  <ContentCard
			subtitle="VKUI"
			header="ContentCard example"
			caption="VKUI Styleguide > Blocks > ContentCard"
		  />
		  <ContentCard
			onClick={() => {}}
			src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
			subtitle="unsplash"
			header="brown and gray mountains under blue sky during daytime photo"
			text="Mountain changji"
			caption="Photo by Siyuan on Unsplash"
			maxHeight={150}
		  />
		  <ContentCard
			disabled
			src="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
			subtitle="unsplash"
			header="persons left hand with pink paint"
			text="Five hours of makeup and paint to achieve the human anatomy photoshoot. Thank you Steph and Shay. See more and official credit on @jawfox.photography."
			caption="Photo by Alexander Jawfox on Unsplash"
			maxHeight={500}
		  />

          <FixedLayout vertical="bottom">
        
            <Separator wide />

           
            <WriteBar
            
              after={
                <Fragment>
				  <WriteBarIcon mode="send" />
                </Fragment>
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
           
              placeholder="Сообщение"
            />
          
        </FixedLayout>

		</CardGrid>
	  </Group>



	</Panel> )

};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

