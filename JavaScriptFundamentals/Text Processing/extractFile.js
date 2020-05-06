function extractFile(path) {

    let pathArray = path.split("\\");
    let lastElement = pathArray.pop();
    let fileName = lastElement.substring(0,lastElement.lastIndexOf("."));
    let fileExtension = lastElement.substring(lastElement.lastIndexOf(".") + 1);

    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');