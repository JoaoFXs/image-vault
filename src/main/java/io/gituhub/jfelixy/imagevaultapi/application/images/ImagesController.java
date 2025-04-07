package io.gituhub.jfelixy.imagevaultapi.application.images;

import io.gituhub.jfelixy.imagevaultapi.domain.entity.Image;
import io.gituhub.jfelixy.imagevaultapi.domain.enums.ImageExtension;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/v1/images")
@RequiredArgsConstructor
public class ImagesController {

    private static final Logger log = LoggerFactory.getLogger(ImagesController.class);
    private final ImageMapper mapper;

    @Autowired
    ImageServiceImpl service;
    //mult-part/formdata
    //Opcional Parameter @RequestParam(value = "name" ,required= "false")

    @PostMapping
    public ResponseEntity save(@RequestParam("file") MultipartFile file,
                               @RequestParam("name") String name,
                               @RequestParam("tags") List<String> tags) {
        log.info("Image Received: name: {}, size: {}", file.getOriginalFilename(), file.getSize());

        Image image = mapper.mapToImage(file, name, tags);
        Image savedImage = service.save(image);
        URI imageUri = buildImageURL(savedImage);

        return ResponseEntity.created(imageUri).build();
    }
    ///v1/images/id
    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") String id){
        var possibleImage = service.findById(id);
        if(possibleImage.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        var image = possibleImage.get();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(image.getExtension().getMediaType());
        headers.setContentLength(image.getSize());
        // inline;filename="image.PNG"
        headers.setContentDispositionFormData("inline; filename=\"" +image.getFileName()+ "\"", image.getFileName());
        return new ResponseEntity<>(image.getFile(), headers, HttpStatus.OK);
    }

    //v1/images?extension=PNG&query=nature
    @GetMapping
    public ResponseEntity<List<ImageDTO>> search(
            @RequestParam(value = "extension", required = false, defaultValue = "") String extension,
            @RequestParam(value = "query", required = false) String query){
            //Returns a list of images found through the extension or query
           var result = service.search(ImageExtension.ofName(extension), query);
            //Iterates through each image, retrieves their URLs, builds the DTO, and finally organizes them into a list of images for return
           var images = result.stream().map(image -> {
               var url = buildImageURL(image);
               return mapper.imageToDTO(image, url.toString());
           }).collect(java.util.stream.Collectors.toList());

          return ResponseEntity.ok(images);
    }

    //localhost:8080/v1/images/{imageId}
    private URI buildImageURL(Image image){
        String imagePath = "/" + image.getId();
        return ServletUriComponentsBuilder.fromCurrentRequestUri().path(imagePath).build().toUri();
    }
}
