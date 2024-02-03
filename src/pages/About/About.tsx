import React, {FC} from "react";
import Typography from "@mui/material/Typography";

const Contact:FC = () => {
    return(
        <>
            <Typography mt={10} gutterBottom variant="h5" component="div">Contact</Typography>
            <Typography variant="body2" color="text.secondary">
                Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </Typography>
        </>
    )
}

export default Contact