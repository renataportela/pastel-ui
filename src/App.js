import React from 'react'

import {
  BackTop,
  Button,
  Chip,
  Close,
  Container,
  FormField,
  Heading,
  Icon,
  iconNames,
  Paragraph,
  Ripple,
  Tag,
  Text,
  TextField,
  Theme,
} from '~/components'

function App() {
  return (
    <Theme>
      <Container>
        <h1>Pastel UI</h1>


        <h2>Button</h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '30px',
          }}
        >
          <Button label="Primary" />
          <Button label="Success" color="success" />
          <Button label="Warning" color="warning" />
          <Button label="Danger" color="danger" />
          <Button label="Info" color="info" />
          <Button label="Neutral" color="neutral" />
          <Button round icon="menu" />
          <Button label="Loading" loading />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '30px',
          }}
        >
          <Button label="Primary" kind="outline" />
          <Button label="Success" color="success" kind="outline" />
          <Button label="Warning" color="warning" kind="outline" />
          <Button label="Danger" color="danger" kind="outline" />
          <Button label="Info" color="info" kind="outline" />
          <Button label="Neutral" color="neutral" kind="outline" />
          <Button round icon="menu" kind="outline" />
          <Button label="Loading" kind="outline" loading />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            marginBottom: '30px',
          }}
        >
          <Button label="Small" size="sm" />
          <Button label="Medium" size="md" />
          <Button label="Large" size="lg" />
          <Button label="Extra Large" size="xl" />

          <Button round icon="menu" size="sm" />
          <Button round icon="menu" size="md" />
          <Button round icon="menu" size="lg" />
          <Button round icon="menu" size="xl" />
        </div>

        <h2>Chip</h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginBottom: 15,
            }}
          >
            <Chip>Default chip</Chip>
            <Chip
              avatar={{
                image: 'https://ps.w.org/wp-avatar/assets/icon-256x256.png',
              }}
            >
              Avatar chip
            </Chip>
            <Chip onDelete={() => {}}>Delete chip</Chip>
            <Chip
              onDelete={() => {}}
              avatar={{
                image: 'https://ps.w.org/wp-avatar/assets/icon-256x256.png',
              }}
            >
              Avatar delete chip
            </Chip>
            <Chip onDelete={() => {}} bgColor="danger">
              Color chip
            </Chip>
          </div>
        </div>

        <h2>Close Button</h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            marginBottom: '30px',
          }}
        >
          <Close size="sm" />
          <Close size="md" />
          <Close size="lg" />
          <Close size="xl" />
        </div>

        <h2>Heading</h2>

        <Heading>Heading 1</Heading>
        <Heading size="h2">Heading 2</Heading>
        <Heading size="h3">Heading 3</Heading>
        <Heading size="h4">Heading 4</Heading>
        <Heading size="h5">Heading 5</Heading>
        <Heading size="h6">Heading 6</Heading>

        <h2>Icon</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.keys(iconNames).map(iconName => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                margin: '5px 10px 5px 0',
                width: '90px',
                padding: '15px 0 0',
              }}
            >
              <Icon color="primary" name={iconName} />
              <p>{iconName}</p>
            </div>
          ))}
        </div>

        <h2>Paragraph</h2>

        <Paragraph>
          Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta
          cumpadi, sou preto inteiris, inteiris. Quem num gosta di mé, boa
          gentis num é. Delegadis gente finis, bibendum egestas augue arcu ut
          est. Quem num gosta di mim que vai caçá sua turmis!
        </Paragraph>
        <Paragraph>
          Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat.
          Praesent lacinia ultrices consectetur. Sed non ipsum felis. Atirei o
          pau no gatis, per gatis num morreus. Si num tem leite então bota uma
          pinga aí cumpadi!
        </Paragraph>

        <h2>Ripple</h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              position: 'relative',
              width: 100,
              height: 100,
              border: '1px solid currentColor',
            }}
          >
            <Ripple />
          </div>
        </div>

        <h2>Tag</h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginBottom: 15,
            }}
          >
            <Tag>Primary</Tag>
            <Tag bgColor="success">Success</Tag>
            <Tag bgColor="warning">Warning</Tag>
            <Tag bgColor="danger">Danger</Tag>
            <Tag bgColor="info">Info</Tag>
            <Tag bgColor="lightgreen" textColor="blue">
              Color
            </Tag>
          </div>
        </div>

        <h2>Text</h2>

        <Text forwardedAs="p">normal</Text>
        <Text forwardedAs="p" bold>
          bold
        </Text>
        <Text forwardedAs="p" weight="300">
          weight 300
        </Text>
        <Text forwardedAs="p" textColor="lightgreen">
          color
        </Text>
        <Text forwardedAs="p" family="Courier New">
          font family
        </Text>
        <Text forwardedAs="p" size="2rem">
          font size
        </Text>
        <Text forwardedAs="p" italic>
          italic
        </Text>
        <Text forwardedAs="p" upper>
          uppercase
        </Text>
        <Text forwardedAs="p" lower>
          Lowercase
        </Text>
        <Text forwardedAs="p" capitalize>
          capitalize
        </Text>
        <Text forwardedAs="p" underline>
          underline
        </Text>
        <Text forwardedAs="p" line>
          line through
        </Text>

        <h2>TextField</h2>

        <div style={{ margin: 40, padding: '30px', width: '500px' }}>
          <TextField placeholder="Input" defaultValue="Some input" />
          <TextField
            type="password"
            placeholder="Senha"
            error
          />
          <TextField type="email" placeholder="Disabled" disabled />
          <TextField placeholder="Textarea" rows={4} />
        </div>

        <div
          style={{
            margin: 40,
            backgroundColor: '#F4F5F7',
            padding: '30px',
            width: '500px',
          }}
        >
          <TextField placeholder="Input" defaultValue="Some input" />
          <TextField
            type="password"
            placeholder="Senha"
            error
          />
          <TextField type="email" placeholder="Disabled" disabled />
          <TextField placeholder="Textarea" rows={4} />
        </div>
      </Container>

      <h2>FormField</h2>

      <div style={{ margin: 40, padding: '30px', width: '500px' }}>
        <FormField 
          label="Description"
          name="description"
          value="Some input"
          onChange={() => {}}
          inputField={<TextField placeholder="Input" />}
        />

        <FormField 
          label="Phone"
          name="phone"
          value=""
          onChange={() => {}}
          error="This field is required."
          inputField={<TextField required />}
        />   
      </div>

      <BackTop />
    </Theme>
  )
}
export default App
