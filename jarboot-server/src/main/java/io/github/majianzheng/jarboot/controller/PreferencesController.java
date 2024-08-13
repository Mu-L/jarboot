package io.github.majianzheng.jarboot.controller;


import io.github.majianzheng.jarboot.utils.SettingUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.github.majianzheng.jarboot.common.pojo.ResponseVo;
import io.github.majianzheng.jarboot.common.utils.HttpResponseUtils;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Paths;

/**
 * 基础配置
 * @author mazheng
 */
@RestController
@RequestMapping("/jarboot/preferences")
public class PreferencesController {

    /**
     * 获取资源文件
     * @param file 文件名
     * @param response response
     * @throws IOException
     */
    @GetMapping("/image/{file}")
    public void getBasicConfigImage(@PathVariable("file") String file, HttpServletResponse response) throws IOException {
        File imageFile = getImageFile(file);
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Expires", "0");
        try (InputStream is = FileUtils.openInputStream(imageFile); OutputStream os = response.getOutputStream()) {
            IOUtils.copy(is, os);
        }
    }

    /**
     * 更新资源
     * @param fileName 文件名
     * @param file 文件
     * @throws IOException
     */
    @PostMapping("/image/{fileName}")
    public void updateBasicConfigImage(
            @PathVariable("fileName") String fileName,
            @RequestParam("file") MultipartFile file) throws IOException {
        File imageFile = getImageFile(fileName);
        try (InputStream is = file.getInputStream(); OutputStream os = FileUtils.openOutputStream(imageFile)) {
            IOUtils.copy(is, os);
        }
    }

    /**
     * 获取产品名称
     * @return {@link ResponseVo}
     */
    @GetMapping("/productName")
    public ResponseVo<String> getProductName() {
        return HttpResponseUtils.success(SettingUtils.getProductName());
    }

    /**
     * 设置产品名称
     * @param productName 产品名称
     * @return {@link ResponseVo}
     */
    @PutMapping("/productName")
    public ResponseVo<String> setProductName(String productName) {
        SettingUtils.setProductName(productName);
        return HttpResponseUtils.success();
    }

    private File getImageFile(String file) {
        return Paths.get(SettingUtils.getHomePath(), "data", "preferences", file).toFile();
    }
}
