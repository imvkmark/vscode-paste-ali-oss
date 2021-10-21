"use strict";
const path = require("path");
const OSS = require("ali-oss");
const dayjs = require("dayjs");

/**
 * Aliyun 上传
 * @param {*} config
 * @param {*} file
 * @param {*} mdFile
 * @returns
 */
module.exports = (config, file) => {
	let localFile = file;
	if (/^".+"$/.test(localFile)) {
		localFile = file.substring(1, file.length - 1);
	}

	let defaultNameConfig = config["defaultName"];
	if (!defaultNameConfig) {
		defaultNameConfig = "YYYY/MM-DD/HH-mm-ss-SSS";
	}

	return new Promise((resolve, reject) => {
		const dotFileNames = file.split(".");
		const fileExtension = dotFileNames[dotFileNames.length - 1]
			? `.${dotFileNames[dotFileNames.length - 1]}`
			: ".png";
		const defaultName = dayjs().format(defaultNameConfig);
		const remoteFile = path.join(config.prefix, defaultName + fileExtension);
		const client = new OSS({
			region: config.region,
			accessKeyId: config.accessKeyId,
			accessKeySecret: config.accessKeySecret,
			bucket: config.bucket,
		});
		client
			.put(remoteFile, localFile)
			.then((data) => {
				resolve(data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
