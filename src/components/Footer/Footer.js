import { Box, Stack, StackDivider } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { SubscribeForm } from './SubscribeForm'

const Footer = () => {
    return (
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            pl={20}
            pr={20}
            pt={20}
        >
            <Stack spacing="10" divider={<StackDivider />}>
                <Stack
                    direction={{
                        base: 'column',
                        lg: 'row',
                    }}
                    spacing={{
                        base: '10',
                        lg: '28',
                    }}
                >
                    <Box flex="1">
                        <Logo />
                    </Box>
                    <Stack
                        direction={{
                            base: 'column',
                            md: 'row',
                        }}
                        spacing={{
                            base: '10',
                            md: '20',
                        }}
                    >
                        <LinkGrid
                            spacing={{
                                base: '10',
                                md: '20',
                                lg: '28',
                            }}
                            flex="1"
                        />
                    </Stack>
                </Stack>
                <Stack
                    direction={{
                        base: 'column-reverse',
                        md: 'row',
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Copyright />
                    <SocialMediaLinks />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer
