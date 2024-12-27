# Tailwind CSS - Custom Styles Not Picking Up

This repository demonstrates a common issue encountered when using Tailwind CSS: custom styles not being applied.

The problem lies in the `content` array in your Tailwind CSS configuration file. If the array doesn't include your component files, Tailwind won't detect and process your custom styles.

**Solution:** Carefully check the `content` array, ensuring it correctly includes all file paths where your custom styles are defined.