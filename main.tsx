// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const View: any = 'div'
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Text: any = 'div'
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Link: any = 'div'
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const shop: any = 'div'

const jsx = (
  <View>
    <Text size="base" appearance="critical">
      It looks like we do not deliver to this region. See our shipping details
      <Link appearance="monochrome" to={`${shop.storefrontUrl}'pages/shipping-and-returns`} external>
        here
      </Link>{' '}
      or contact our Customer Care team for more information
    </Text>
  </View>
)
