import {
  Image,
  Grid,
  GridItem,
  Spinner,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";
import useScreenshots from "../hooks/useScreenshots";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  gameId: number;
}

const GameMedia = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);
  const { data: screenshots } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw new Error(error.message);

  const first = trailers?.results[0];

  const screenshotImages = !first
    ? screenshots?.results.slice(1, 4)
    : screenshots?.results.slice(0, 3);

  const screenshotImagesShow =
    screenshotImages && screenshotImages?.length > 0
      ? screenshotImages?.map((imageObj) => imageObj.image)
      : [noImage, noImage, noImage];

  return (
    <Grid gridTemplateRows={`repeat(4}, 1fr)`} gap={4}>
      <GridItem colSpan={2} rowSpan={2}>
        <AspectRatio ratio={16 / 9}>
          {first ? (
            <video
              src={first.data[480]}
              poster={first.preview}
              autoPlay={true}
              muted
              controls
              loop
              style={{ borderRadius: 6 }}
            ></video>
          ) : (
            <Image borderRadius={6} src={screenshots?.results[0].image}></Image>
          )}
        </AspectRatio>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2}>
        <Grid gridTemplateColumns={"1fr 1fr"} gap={4}>
          {screenshotImagesShow.map((image, index) => (
            <AspectRatio key={index} ratio={16 / 9}>
              <Image borderRadius={4} src={image}></Image>
            </AspectRatio>
          ))}
          <Button
            w={"100%"}
            height={"100%"}
            fontWeight={400}
            fontSize={"13px"}
            color={"gray.500"}
            backgroundImage={
              screenshotImagesShow[screenshotImagesShow.length - 1]
            }
            backgroundSize={"cover"}
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(32, 32, 32, 0.95)", // 80% dark overlay
              borderRadius: "inherit", // Matches the button's border radius
            }}
            _hover={{
              color: "gray.900",
              _before: {
                backgroundColor: "rgba(80, 80, 80, 1)", // Lighter overlay on hover
              },
            }}
            _after={{
              content: '"• • •\\Aview all"',
              whiteSpace: "pre",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Button>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default GameMedia;
