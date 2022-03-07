import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";

function Comment(props) {
  return (
    <TableRow>
      <TableCell align="left">
        <Grid container columnSpacing={3}>
          <Grid item xs={4}>
            <Avatar alt={props.author.lastName} src={props.author.avatarUrl} />
          </Grid>
          <Grid item xs={8} sx={{ margin: "auto" }}>
            {props.author.lastName}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="left">{props.text}</TableCell>
      <TableCell align="left">{props.date}</TableCell>
      <TableCell align="left">{props.isNice ? "yes" : "no"}</TableCell>
    </TableRow>
  );
}

function CommentHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">Author</TableCell>
        <TableCell align="left">Comment</TableCell>
        <TableCell align="left">Date</TableCell>
        <TableCell align="left">Nice?</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function Comments(props) {
  return (
    <Container sx={{ paddingTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="table of comments">
          <CommentHead />
          <TableBody>
            {props.comments.map((comment) => (
              <Comment
                key={comment.key}
                author={comment.author}
                text={comment.text}
                date={comment.date}
                isNice={comment.isNice}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
