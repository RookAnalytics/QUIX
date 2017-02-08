module.exports = {

  test: test

}





/******************************************************************************\
	All general logic goes above this comment.
	All detailed logic(function definitions) goes below this comment.
\******************************************************************************/

function test(req, res) {
  res.status(200).json('API is working!');
}
