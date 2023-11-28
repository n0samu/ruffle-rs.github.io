import { Container, Flex, Group, Stack, Text } from "@mantine/core";
import classes from "./compatibility.module.css";
import { AvmBlock } from "@/app/compatibility/avm";
import Image from "next/image";
import React from "react";
import { Title } from "@mantine/core";
import { List, ListItem, rem, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function Downloads() {
  return (
    <Container size="xl" className={classes.container}>
      <Stack gap="xl">
        <Group align="top" wrap="nowrap">
          <Image
            src="/undraw/undraw_split_testing_l1uw.svg"
            alt="Person comparing Ruffle compatibility"
            width={219}
            height={200}
            className={classes.actionscriptImage}
          />
          <Stack className={classes.actionscriptInfo}>
            <Title className={classes.title}>ActionScript Compatibility</Title>
            <Text size="sm">
              The biggest factor in content compatibility is ActionScript; the
              language that powers interactivity in games and applications made
              with Flash. All Flash content falls in one of two categories,
              depending on which version of the language was used to create it.
            </Text>
            <Text size="sm">
              We track our progress in each AVM by splitting them up into two
              different areas:
            </Text>
            <List size="sm">
              <ListItem>
                The <b>Language</b> is the underlying virtual machine itself and
                the language concepts that it understands, like variables and
                classes and how they all interact together.
              </ListItem>
              <ListItem>
                The <b>API</b> is the original built-in methods and classes that
                are available for this AVM, like the ability to interact with
                objects on the stage or make web requests.
              </ListItem>
            </List>
          </Stack>
        </Group>

        <Flex
          align="top"
          justify="space-between"
          columnGap={25}
          rowGap={50}
          className={classes.avms}
        >
          <AvmBlock
            name="AVM 1: ActionScript 1 & 2"
            language_done={95}
            api_done={75}
            info_link_target="_blank"
            info_link="https://github.com/ruffle-rs/ruffle/issues/310"
          >
            <Text size="sm">
              AVM 1 is the original ActionScript Virtual Machine. All movies
              made before Flash Player 9 (June 2006) will be made with AVM 1,
              and it remained supported &amp; available to authors until the
              release of Flash Professional CC (2013), after which point content
              started moving to AVM 2.
            </Text>
            <Text size="sm">
              We believe that most AVM 1 content will work, but we are aware of
              some graphical inaccuracies and smaller bugs here and there.
              Please feel free to report any issues you find that are not
              present in the original Flash Player! For in-depth details, please
              follow our AVM 1 tracking issue on GitHub.
            </Text>
          </AvmBlock>

          <AvmBlock
            name="AVM 2: ActionScript 3"
            language_done={75}
            api_done={68}
            api_stubbed={6}
            info_link="/compatibility" // TODO
          >
            <Text size="sm">
              AVM 2 was introduced with Flash Player 9 (June 2006), to replace
              the earlier AVM 1. After the release of Flash Professional CC
              (2013), authors are required to use ActionScript 3 - making any
              movie made after that date very likely to fall under this
              category.
            </Text>
            <Text size="sm">
              Ruffle now has decent support for AVM 2, and it&apos;s our
              experience that most games will work well enough to be played.
              We&apos;re still rapidly improving in this area though, so bug
              reports about any broken content are always welcome! For in-depth
              details, please see our page outlining full AVM2 implementation
              details.
            </Text>
          </AvmBlock>
        </Flex>
      </Stack>
    </Container>
  );
}
