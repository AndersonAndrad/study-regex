class Text {
  showText(request, response) {
    return response.json('text');
  }
}

export default new Text();
