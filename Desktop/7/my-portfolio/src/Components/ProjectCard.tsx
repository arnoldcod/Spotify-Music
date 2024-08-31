import { Button, Card, Group, Image, Text, Badge, Indicator } from "@mantine/core";

const ProjectCard = (props:any)=> {
    return (
        <Card className="!bg-bgColor cursor-pointer transition-transform duration-300 hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor border-2"  w="360px" shadow="lg" padding="sm" radius="lg" withBorder>
        <Card.Section className="p-3" >
          <Image
          className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] "
            src={props.image}
            height={160}
            alt={props.image}
          />
        </Card.Section>
  
        <Group justify="space-between" mt="xs" mb="xs">
          <Text className="!text-2xl !font-bold !text-white flex items-center">{props.title} {props.live=== true && <Badge variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={7} processing> </Indicator>} >
            Live
            </Badge>}</Text>
          
        </Group>
        <Group  mb="xs"> 
        {props.technologies.map((tech:string , index:number)=> index<3&& <Badge key={index} size="lg" variant="light" color="#64FFDA">{tech}</Badge> )}
        </Group>
  
        <Text className=" !text-justify" lineClamp={5}  size="sm" c="dimmed">
          {props.desc}
        </Text>
  
        <Button className="!bg-primaryColor !text-bgColor" fullWidth mt="md" radius="md">
          Show more
        </Button>
      </Card>
    )
}

export default ProjectCard;